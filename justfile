set windows-shell := ["pwsh.exe", "-NoLogo", "-NoProfile", "-CommandWithArgs"]
export PATH := "./node_modules/.bin:" + env_var('PATH')
set dotenv-load := true
set positional-arguments := true

default:
  just --list --unsorted

denoPermissions := "-A"

run *args:
    deno run {{denoPermissions}} ./main.ts {{args}}

build:
    deno compile {{denoPermissions}} ./main.ts