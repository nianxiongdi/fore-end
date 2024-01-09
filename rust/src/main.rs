use reqwest;

async fn make_request() -> Result<(), reqwest::Error> {
    let response = reqwest::get("https://api.spotify.com/v1/search").await?;

    if response.status().is_success() {
        let body = response.bytes().await?;
        println!("Response body: {:?}", body);
    } else {
        println!("Request failed with status code: {}", response.status());
    }

    Ok(())
}

fn main() {
    // Start the tokio runtime and run the asynchronous function
    let result = tokio::runtime::Builder::new_current_thread()
        .enable_all()
        .build()
        .unwrap()
        .block_on(make_request());

    // Handle the result if needed
    if let Err(err) = result {
        eprintln!("Error: {:?}", err);
    }
}
