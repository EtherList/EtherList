//Base class for contracts used in the EtherRep system
contract EtherRepEnabled {
  address EREP;
  event SetERAddress(bool result, address addr);
  event Removed(bool result);

  function setEtherRepAddress(address EtherRepAddr) returns (bool result){
    //After setting EREP, only the contract w/ address of EREP may reset this variable
    if(EREP != 0x0 && msg.sender != EREP){
      SetERAddress(false, msg.sender);
      return false;
    }

    EREP = EtherRepAddr;
    SetERAddress(true, EREP);
    return true;
  }

  //Only contract w/ address of EREP may selfdestruct
  function remove(){
    if(msg.sender == EREP){
      Removed(true);
      selfdestruct(EREP);
    }

    Removed(false);
  }

}
