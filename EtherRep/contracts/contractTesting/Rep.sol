import "./EtherListEnabled.sol";
import "./ContractProvider.sol";
import "./RepDb.sol";

contract Rep is EtherListEnabled {
  mapping (address => uint) public maxRepIncrease;
  mapping (address => uint) public maxRepDecrease;
  event IncreasedRep(bool result, uint amount, address addr);
  event DecreasedRep(bool result, uint amount, address addr);
  event SetMaxRepChanges(bool result, uint increaseBy, uint decreaseBy, address addr);

  function increaseRep(address userAddr, uint increaseBy) returns (bool res) {
    //Only EtherList may successfully modify rep level
    if (!isEtherListEnabled()){
      IncreasedRep(false, 0, userAddr);
      return false;
    }

    //Alert listener if dependency not met
    address repdb = ContractProvider(EREP).contracts("repdb");
    if ( repdb == 0x0 ) {
      IncreasedRep(false, 0, userAddr);
      return false;
    }

    //Call repdb contract; alert listener of success/failure
    if(RepDb(repdb).increaseRep(userAddr, increaseBy)) {
      IncreasedRep(true, increaseBy, userAddr);
      return true;
    } else {
      IncreasedRep(false, 0, userAddr);
      return false;
    }
  }

  function decreaseRep(address userAddr, uint decreaseBy) returns (bool res) {
    //Only EtherList may modify rep level
    if (!isEtherListEnabled()){
      DecreasedRep(false, 0, userAddr);
      return false;
    }

    //Alert listener if dependency not met
    address repdb = ContractProvider(EREP).contracts("repdb");
    if ( repdb == 0x0 ) {
      DecreasedRep(false, 0, userAddr);
      return false;
    }

    //Call repdb contract; alert listener of success/failure
    if (RepDb(repdb).decreaseRep(userAddr, decreaseBy)) {
      DecreasedRep(true, decreaseBy, userAddr);
      return true;
    } else {
      DecreasedRep(false, 0, userAddr);
      return false;
    }
  }

  function setMaxRepChanges(address contractAddr, uint maxIncrease, uint maxDecrease) returns (bool res) {
    //Only EtherRepDomain can add fluctuation amounts
    if (msg.sender == EREP ){
      maxRepIncrease[contractAddr] = maxIncrease;
      maxRepDecrease[contractAddr] = maxDecrease;
      SetMaxRepChanges(true, maxIncrease, maxDecrease, contractAddr);
      return true;
    }
    
    SetMaxRepChanges(false, 0, 0, contractAddr);
    return false;
  }

}
