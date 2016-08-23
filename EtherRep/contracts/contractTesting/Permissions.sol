import "./ContractProvider.sol";
import "./PermissionsDb.sol";
import "./EtherListEnabled.sol";

contract Permissions is EtherListEnabled {
  event SetPermission(bool result, uint lvl, address addr);

  function setPermission(address addr, uint8 perm) returns (bool res) {
    // Only EtherList may set permission level
    if (!isEtherListEnabled()){
      SetPermission(false, 0, addr);
      return false;
    }

    address permdb = ContractProvider(EREP).contracts("permsdb");
    
    //Alert listener if dependency not met
    if ( permdb == 0x0 ) {
      SetPermission(false, 0, addr);
      return false;
    }

    //Call permsdb contract; alert listener of success/failure
    if(PermissionsDb(permdb).setPermission(addr, perm)) {
      SetPermission(true, perm, addr);
      return true;
    } else {
      SetPermission(false, 0, addr);
      return false;
    }
  }

}
