import "./ContractProvider.sol";
import "./EtherRepEnabled.sol";

contract PermissionsDb is EtherRepEnabled {

  event SetPermission(bool result, uint lvl, address addr);

  //Create permissions ledger
  mapping (address => uint8) public perms;

  function setPermission(address addr, uint8 permLvl) returns (bool res) {
    if(EREP != 0x0){
      address permC = ContractProvider(EREP).contracts("perms");

      //Only allow contract permC to successfully modify permissions of contracts
      if (msg.sender == permC ){
        perms[addr] = permLvl;
        SetPermission(true, permLvl, addr);
        return true;
      }
    }
    
    SetPermission(false, 0, addr); 
    return false;
  }

}
