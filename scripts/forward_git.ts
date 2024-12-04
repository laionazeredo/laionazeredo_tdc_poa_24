const decoder = new TextDecoder();

async function runCommand(cmd: string[]) {
  const command = new Deno.Command(cmd[0], {
    args: cmd.slice(1),
    stdin: "null",
    stdout: "piped",
    stderr: "piped",
  });

  const { code, stdout, stderr } = await command.output();

  const stdoutStr = decoder.decode(stdout);
  const stderrStr = decoder.decode(stderr);

  if (code !== 0) {
    throw new Error(stderrStr);
  }

  return stdoutStr.trim();
}

async function forward() {
  try {
    const logOutput = await runCommand(["git", "log", "main", "--pretty=format:%H %s"]);
    const log = logOutput.split("\n").map(line => {
      const [hash, ...messageParts] = line.split(" ");
      return { hash, message: messageParts.join(" ") };
    });

    const currentCommit = (await runCommand(["git", "rev-parse", "HEAD"])).trim();
    const currentIndex = log.findIndex(commit => commit.hash === currentCommit);
    const nextCommit = log[currentIndex - 1]; // O próximo commit está no índice anterior

    if (nextCommit) {
      await runCommand(["git", "checkout", nextCommit.hash]);
      console.log(`Feito checkout para o commit: ${nextCommit.hash} - ${nextCommit.message}`);
    } else {
      console.log('Você já está no commit mais recente: ' + log[0].message);
    }
  } catch (err) {
    console.error('Erro:', err);
  }
}

forward();
