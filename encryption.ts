enum Checksum {
    CRC32
}

enum Encryption {
    DES3
}

function to_binary(text: string) {
    return
}

function repeat(text: string, amount: number): string {
    let new_string = ""
    for (let i = 0; i < amount; i++) {
        new_string += text
    }
    return new_string
}

function split_blocks(binary: string, length: number): Array<string> {
    let chunks = []
    let current_str = ""
    for (let i = 0; i < binary.length; i++) {
        if (i < length) {
            current_str += binary[i]
        } else {
            if (current_str.length < length) {
                current_str = repeat("0", length - current_str.length) + current_str
            }
            chunks.push(current_str)
            current_str = ""
        }
    }
    return chunks
}

function des_3(text: string, k1: string, k2: string, k3: string) {
    return
}