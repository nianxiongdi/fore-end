// use crate::config::FnmConfig;
// use crate::outln;
// use colored::Colorize;

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
