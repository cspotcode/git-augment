
import * as cli from 'jsr:@std/cli';

cli.parseArgs(Deno.args, {
    
});

// import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

// await new Command()
//     .name("git-augment")
//     .version("1.0.0")
//     .description("A Git extension tool")
//     .command("init", "Initialize the git-augment configuration")
//     .action(() => {
//         console.log("Initializing git-augment...");
//     })
//     .command("status", "Show current git-augment status")
//     .action(() => {
//         console.log("Checking status...");
//     })
//     .parse(Deno.args);