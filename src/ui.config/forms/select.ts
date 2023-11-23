import input from './input'

export default {
  ...input,
  placeholder: 'text-gray-900 dark:text-white',
  default: {
    size: 'sm',
    color: 'white',
    variant: 'outline',
    loadingIcon: 'icon-[heroicons--arrow-path-20-solid]',
    trailingIcon: 'icon-[heroicons--chevron-down-20-solid]'
  }
}