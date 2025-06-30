const votes = {
  Alice: 0,
  Bob: 0,
  Charlie: 0
};

function vote(candidate) {
  if (!votes.hasOwnProperty(candidate)) {
    document.getElementById("status").innerText = "Invalid candidate.";
    return;
  }

  votes[candidate]++;
  updateResults();
  document.getElementById("status").innerText = `You voted for ${candidate}.`;
}

function updateResults() {
  document.getElementById("aliceVotes").innerText = votes["Alice"];
  document.getElementById("bobVotes").innerText = votes["Bob"];
  document.getElementById("charlieVotes").innerText = votes["Charlie"];
}
