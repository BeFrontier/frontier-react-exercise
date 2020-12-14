export default interface ElementProps<T= Boolean|String> {
  element: Frontier.Element,
  handleChange: (_:string, __:T, isValid: boolean) => void
}
