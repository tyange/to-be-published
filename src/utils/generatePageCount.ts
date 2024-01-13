export const generatePageCount = (totalCount: number, pageSize: number) => {
  const dividedTotalCount = totalCount / pageSize
  if (totalCount % pageSize === 0) {
    return dividedTotalCount
  }
  return Math.floor(dividedTotalCount) + 1
}
