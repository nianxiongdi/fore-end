

#[cfg(test)]
mod tests {
    use super::*;
    use wasm_bindgen_test::*;

    wasm_bindgen_test_configure!(run_in_browser);

    #[wasm_bindgen_test]
    fn test_add() {
        assert_eq!(add(1, 2), 6);
        assert_eq!(add(10, 20), 33); // 10 + 20 + 1 + 2 = 33
    }
}