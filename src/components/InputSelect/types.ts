export type InputSelectItem = { label: string; value: string }

export type InputSelectProps<TItem> = {
  label: string
  defaultValue?: TItem | null
  onChange: (value: TItem | null) => void
  items: TItem[]
  parseItem: (item: TItem) => InputSelectItem
  isLoading?: boolean
  loadingLabel: string
}

export type DropdownPosition = { // type can be removed if GetDropdownPositionFn type is removed
  top: number
  left: number
}

export type InputSelectOnChange<TItem> = (selectedItem: TItem | null) => void

export type GetDropdownPositionFn = (target: EventTarget) => DropdownPosition // unused type, can be removed
