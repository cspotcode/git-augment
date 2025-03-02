import * as cmd from 'npm:cmd-ts';
import manifest from './deno.json' with {type: 'json'};
import $ from '@david/dax';

const _args = {
    rest: cmd.rest({
        displayName: 'rest of args',
        description: 'Everything else is captured here'
    })
}

const restoreCmd = cmd.command({
    name: 'restore',
    args: {},
    handler(args) {
        console.log(`This is the restore subcommand: ${args}`);
    }
});

const saveCmd = cmd.command({
    name: 'save',
    args: {},
    async handler(args) {
        console.log(`This is the save subcommand: ${args}`);
        
        const gitConfig = await $`git config --list -z`.stdout('piped');
        const gitConfigValues = gitConfig.stdout.split('\0').map(pair => {
            const split = pair.indexOf('\n');
            const sectionKey = pair.slice(0, split);
            const splitA = sectionKey.indexOf('.');
            const splitB = sectionKey.lastIndexOf('.');
            const section = sectionKey.slice(0, splitA);
            const key = sectionKey.slice(splitB + 1);
            const subsection = splitA === splitB ? undefined : sectionKey.slice(splitA + 1, splitB);
            const value = pair.slice(split + 1);
            return {
                section, subsection, key, value
            };
        });
        // Build into an object:
        section(name, subsection name)
        console.dir(gitConfigValues);
    }
});

const gitAugment = cmd.subcommands({
    name: 'git-augment',
    cmds: {
        [restoreCmd.name]: restoreCmd,
        [saveCmd.name]: saveCmd,
    },
    description: 'Save and restore an overlay of additions and modifications to a repository without committing them.',
    version: manifest.version,
});

cmd.run(gitAugment, Deno.args);
