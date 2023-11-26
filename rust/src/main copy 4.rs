use clap::Parser;

/// Simple program to greet a person
#[derive(Parser, Debug)]
#[command(author="qy", version="1.0.0", about="Does awesome things", long_about = None)]
struct Args {
    /// Name of the person to greet
    #[arg(short, long)]
    name: String,

    /// Number of times to greet
    #[arg(short, long, default_value_t = 1)]
    count: u8,
}

fn main() {
    // let args: Args = Args::parse();

    // for _ in 0..args.count {
    //     println!("Hello {}!", args.name);
    // }

    // let cli = Args::parse();
    // println!("two: {:?}", cli.name);
    // println!("one: {:?}", cli.count);

}
// https://juejin.cn/post/7242623208825110586?from=search-suggest
// cargo run -- --name 7