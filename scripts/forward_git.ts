import { simpleGit } from 'simple-git';
const git = simpleGit();

async function forward() {
  try {
    const log = await git.log();
    const currentCommit = log.latest.hash;
    const currentIndex = log.all.findIndex((commit: any) => commit.hash === currentCommit);
    const nextCommit = log.all[currentIndex - 1];

    if (nextCommit) {
      await git.checkout(nextCommit.hash);
      console.log(`Checked out to commit: ${nextCommit.hash} - ${nextCommit.message}`);
    } else {
      console.log('Already at the latest commit: ' + log.latest.message);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

forward();
