<script setup>
const toast = useToast()

onMounted(() => {
  toast.add({
    id: 'update_downloaded',
    title: 'Update downloaded.',
    description: 'It will be installed on restart. Restart now?',
    icon: 'i-octicon-desktop-download-24',
    timeout: 0,
    actions: [{
      label: 'Restart',
      click: () => {

      }
    }]
  })
})
</script>
