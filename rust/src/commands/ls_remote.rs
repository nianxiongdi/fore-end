// use crate::config::FnmConfig;
// use crate::remote_node_index;
// use thiserror::Error;

#[derive(clap::Parser, Debug)]
pub struct LsRemote {}
pub trait Command: Sized {
    // type Error: std::error::Error;
    fn apply(self) -> Result<(), ()>;

    fn handle_error(  ) {
        // let err_s = format!("{err}");
        // outln!(config, Error, ?"{} {}", "error:".red().bold(), err_s.red());
        std::process::exit(1);
    }

    fn call(self ) {
        match self.apply() {
            Ok(()) => (),
            _ => (),
        }
    }
}

impl super::command::Command for LsRemote {
    // type Error = Error;

    fn apply(self) -> Result<(), ()> {
        print!(">>>> ls remote ");

        // let all_versions = remote_node_index::list(&config.node_dist_mirror)?;

        // for version in all_versions {
        //     print!("{}", version.version);
        //     if let Some(lts) = &version.lts {
        //         print!(" ({lts})");
        //     }
        //     println!();
        // }

        Ok(())
    }
}

// #[derive(Debug, Error)]
// pub enum Error {
//     #[error(transparent)]
//     HttpError {
//         #[from]
//         source: crate::http::Error,
//     },
// }
