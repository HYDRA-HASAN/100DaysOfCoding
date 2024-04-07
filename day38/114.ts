const studentMap = new Map<number, string>();
studentMap.set(1, "John");
studentMap.set(2, "Jane");
studentMap.set(3, "Alice");

for (const [id, name] of studentMap) {
    console.log(`Student ID: ${id}, Name: ${name}`);
}