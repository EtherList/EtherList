contract BasicContract {
  address public owner;

  address private seller;
  address private buyer;

  mapping (address => bool) public completed;

  function BasicContract(address sellerWallet, address buyerWallet) {
    owner = msg.sender;
    seller = sellerWallet;
    buyer = buyerWallet;
  }

  function markCompleted() {
    completed[msg.sender] = true;
  }

  function isCompleted() returns (bool) {
    return completed[seller] && completed[buyer];
  }

  function remove(address who) {
    if (msg.sender == owner) {
      selfdestruct(owner);
    }
  }

}
