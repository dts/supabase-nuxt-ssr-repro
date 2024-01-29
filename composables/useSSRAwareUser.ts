export function useSSRAwareUser() {
  const clientUser = useSupabaseUser();
  const serverUser = useState('su', useSupabaseUser);

  const mounted = ref(false);

  onMounted(() => mounted.value = true);

  return computed(() => mounted.value ? clientUser.value : serverUser.value);
}
