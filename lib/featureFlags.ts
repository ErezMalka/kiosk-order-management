export const featureFlags = {
  isMultiSuppliersEnabled: () => {
    return process.env.MULTI_SUPPLIERS_ENABLED === 'true'
  },
}
