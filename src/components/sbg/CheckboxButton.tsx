import { InputEventTarget } from "routes/pf2/character-builder/CharacterBuilder"

export interface CheckboxButtonProps {
  checked: boolean
  fieldName: string
  id: string
  label: string
  onClick: (e: InputEventTarget) => void
}

export const CheckboxButton = ({
  checked,
  fieldName,
  id,
  label,
  onClick,
}: CheckboxButtonProps) => {
  return (
    <>
      <div className="form-group text-center">
        <label className="" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={`dex-check ${checked ? "checked" : ""}`}
          name={fieldName}
          onChange={onClick}
          // @ts-expect-error
          onClick={onClick}
        />
      </div>
    </>
  )
}
