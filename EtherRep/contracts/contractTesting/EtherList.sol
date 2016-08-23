import "./ContractProvider.sol";
import "./Rep.sol";
import "./RepDb.sol";
import "./Permissions.sol";
import "./PermissionsDb.sol";

contract EtherList is EtherRepEnabled {
  address owner;
  event SetOwner(address addr);
  event IncreasedRep(bool result, address addr);
  event DecreasedRep(bool result, address addr);
  event SetPerms(bool result, uint8 permLvl, address addr);

  //Constructor
  function EtherList(){
    owner = msg.sender;
    SetOwner(owner);
  }

  //TODO: include amount to decrease/increase by argument
  function contractCompleted(address addr, uint increaseByAmt) returns (bool res) {
    address rep = ContractProvider(EREP).contracts("rep");
    address repdb = ContractProvider(EREP).contracts("repdb");
    address permsdb = ContractProvider(EREP).contracts("permsdb");

    //Alert listener if dependency not met
    if ( rep == 0x0 || permsdb == 0x0 || PermissionsDb(permsdb).perms(msg.sender) < 1) {
      IncreasedRep(false, addr);
      return false;
    }

    //Ensure requested reputation change is inside limit
    uint maxRepIncrease = Rep(rep).maxRepIncrease(address(this));
    if (increaseByAmt > maxRepIncrease) {
      IncreasedRep(false, addr);
      return false;
    }

    //Call the rep contract; alert listener of success/failure
    if(!Rep(rep).increaseRep(addr, increaseByAmt)) {
      IncreasedRep(false, addr);
      return false;
    } else {
      IncreasedRep(true, addr);
      return true;
    }

  }

  function contractFailed(address addr, uint decreaseByAmt, uint decreaseByDenominator) returns (bool res) {
    address rep = ContractProvider(EREP).contracts("rep");
    address repdb = ContractProvider(EREP).contracts("repdb");
    address permsdb = ContractProvider(EREP).contracts("permsdb");

    //Alert listener if dependency not met
    if (rep == 0x0 || permsdb == 0x0 || PermissionsDb(permsdb).perms(msg.sender) < 1) {
      DecreasedRep(false, addr);
      return false;
    }

    //Handle the amount to increase by
    uint decreaseBy;
    uint currentBalance = RepDb(repdb).repBalances(addr);
    if (decreaseByAmt >= currentBalance / decreaseByDenominator) {
      decreaseBy = decreaseByAmt;
    } else {
      decreaseBy = currentBalance / decreaseByDenominator;
    }

    //Ensure requested reputation change is inside limit
    uint maxRepDecrease = Rep(rep).maxRepDecrease(address(this));
    if (decreaseBy > maxRepDecrease) {
      DecreasedRep(false, addr);
      return false;
    }

    //Call the rep contract; alert listener of success/failure
    if(Rep(rep).decreaseRep(addr, decreaseBy)) {
      DecreasedRep(true, addr);
      return true;
    } else {
      DecreasedRep(false, addr);
      return false;
    }
  }

  function setPermission(address addr, uint8 permLvl) returns (bool res) {
    //Only EtherList may successfully call this function
    if (msg.sender != owner){
      SetPerms(false, 0, msg.sender);
      return false;
    }

    //Alert listener if dependency not met
    address perms = ContractProvider(EREP).contracts("perms");
    if ( perms == 0x0 ) {
      SetPerms(false, 0, 0);
      return false;
    }

    //Call permissions contract; alert listener of success/failure
    if(Permissions(perms).setPermission(addr,permLvl)) {
      SetPerms(true, permLvl, addr);
      return true;
    } else {
      SetPerms(false, 0, 0);
      return false;
    }
  }
}