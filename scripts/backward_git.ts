import { simpleGit } from 'simple-git';
const git = simpleGit();

async function backward() {
  try {
    const log = await git.log();
    const currentCommit = log.latest.hash;
    const currentIndex = log.all.findIndex((commit: any) => commit.hash === currentCommit);
    const previousCommit = log.all[currentIndex + 1]; // O commit anterior está no índice seguinte

    if (previousCommit) {
      await git.checkout(previousCommit.hash);
      console.log(`Checked out to commit: ${previousCommit.hash} - ${previousCommit.message}`);
    } else {
      console.log('Already at the first commit: ' + + log.latest.message);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

backward();
