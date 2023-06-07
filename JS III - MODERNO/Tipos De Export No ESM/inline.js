export function inline() {
    console.log('Export nomeado inline')
}

export default function defaultInline() { // Só pode ter um por arquivo, pode ser anônima
    console.log('Export default inline')
}