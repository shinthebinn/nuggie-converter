type DropdownProps = {
    items : any[][],
    onChange? : (arg0: any) => any,
    undefinedString : string
}

export default function DropdownMenu(props: DropdownProps) {
    return (
        <select onChange={(e) => props.onChange(e.target.value)}>
            <option value={undefined}>Select {props.undefinedString}:</option>
            {props.items.map(( [ value, display ] ) => <option value={value}>{display}</option>)}
        </select>
    )
}