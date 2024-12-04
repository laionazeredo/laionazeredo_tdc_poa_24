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

async function backward() {
  try {
    const logOutput = await runCommand(["git", "log", "--pretty=format:%H %s"]);
    const log = logOutput.split("\n").map(line => {
      const [hash, ...messageParts] = line.split(" ");
      return { hash, message: messageParts.join(" ") };
    });

    const currentCommit = (await runCommand(["git", "rev-parse", "HEAD"])).trim();
    const currentIndex = log.findIndex(commit => commit.hash === currentCommit);
    const previousCommit = log[currentIndex + 1]; // O commit anterior está no índice seguinte

    if (previousCommit) {
      await runCommand(["git", "checkout", previousCommit.hash]);
      console.log(`Feito checkout para o commit: ${previousCommit.hash} - ${previousCommit.message}`);
    } else {
      console.log('Você já está no primeiro commit: ' + log[0].message);
    }
  } catch (err) {
    console.error('Erro:', err);
  }
}

backward();
