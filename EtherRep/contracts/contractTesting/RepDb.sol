import "./ContractProvider.sol";
import "./EtherRepEnabled.sol";

contract RepDb is EtherRepEnabled {
  event IncreasedRep(bool result, uint amount, address addr, uint newBalance);
  event DecreasedRep(bool result, uint amount, address addr, uint newBalance);

  //Create reputation ledger
  mapping (address => uint) public repBalances;

  function increaseRep(address addr, uint increaseBy) returns (bool res) {
    if(EREP != 0x0){
      address rep = ContractProvider(EREP).contracts("rep");

      //Only allow contract rep to successfully modify reputation of user
      if (msg.sender == rep ){
        repBalances[addr] += increaseBy;
        IncreasedRep(true, increaseBy, addr, repBalances[addr]);
        return true;
      }
    }
    
    IncreasedRep(false, 0, addr, repBalances[addr]);
    return false;
  }

  function decreaseRep(address addr, uint decreaseBy) returns (bool res) {
    if(EREP != 0x0){
      address rep = ContractProvider(EREP).contracts("rep");

      //Only allow contract rep to successfully modify reputation of user
      if (msg.sender == rep ){
        repBalances[addr] -= decreaseBy;
        DecreasedRep(true, decreaseBy, addr, repBalances[addr]);
        return true;
      }
    }

    DecreasedRep(false, 0, addr, repBalances[addr]);
    return false;
  }

}
