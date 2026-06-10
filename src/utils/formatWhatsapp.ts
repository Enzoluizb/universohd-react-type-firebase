export function formatWhatsapp(value: string) {
    const numbers = value.replace(/\D/g, "").slice(0, 11);

    const ddd = numbers.slice(0, 2);
    const part1 = numbers.slice(2, 7);
    const part2 = numbers.slice(7, 11);

    if (numbers.length <= 2) {
        return ddd;
    }

    if (numbers.length <= 7) {
        return `(${ddd}) ${part1}`;
    }

    return `(${ddd}) ${part1}-${part2}`;
}
