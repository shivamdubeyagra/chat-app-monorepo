export function TextInput({
    placeholder,
    value,
    onChange,
}: {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <input type="text" placeholder={placeholder} value={value} onChange={onChange}/>
    )
}