export function buildFilterOptions(data, filtersConfig) {
  const options = {};

  filtersConfig.forEach(({ key }) => {
    options[key] = Array.from(
      new Set(
        data
          .map(row => row[key])
          .filter(Boolean)
      )
    );
  });

  return options;
}