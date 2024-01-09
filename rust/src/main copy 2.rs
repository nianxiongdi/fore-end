// fn main() {

//     let mut a = 5;
//     a = 1;
//     println!(">>> a = {}", a);
// }

use clap::Parser;
// use crate::commands;
// use crate::commands::Command;
mod commands;

#[derive(clap::Parser, Debug)]
pub enum SubCommand {
    /// List all remote Node.js versions
    #[clap(name = "list-remote", bin_name = "list-remote", visible_aliases = &["ls-remote"])]
    LsRemote(commands::ls_remote::LsRemote),

}

impl SubCommand {
    pub fn call(self) {
        match self {
            Self::LsRemote(cmd) => {

                // print!(">>>> ", cmd);
                return cmd.call()
            },
         }
    }
}

#[derive(clap::Parser, Debug)]
#[clap(name = "fnm", version = env!("CARGO_PKG_VERSION"), bin_name = "fnm")]
pub struct Cli {
    // #[clap(flatten)]
    // pub config: FnmConfig,
    #[clap(subcommand)]
    pub subcmd: SubCommand,
}

pub fn parse() -> Cli {
    Cli::parse()
}

fn main() {
    let value = parse();
    // value.subcmd.call(value.config);
}
