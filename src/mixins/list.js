export const listState = {
  list: [],
  nextPage: 1,
  inited: false,
  hasMore: true,
  loading: false,
  skeleton: [0, 1, 2, 3, 4],
  dividerMargin: '30px',
}

export const listMethods = {
  // 由一些dom event触发, 比如@appear="listEmitLoadMore"
  listEmitLoadMore(load) {
    const { loading, hasMore, nextPage } = this.listState
    if (loading || !hasMore || !load) return

    this.listState.loading = true

    this.listOnLoadMore(nextPage)
  },

  listAppend(res = [], hasMore) {
    const list = [...this.listState.list, ...res]
    list.forEach((item, i) => {
      item.$index = i
    })
    this.listState.list = list
    this.listAfterUpdateList(hasMore)
  },

  listAfterUpdateList(hasMore) {
    this.listState.nextPage += 1
    this.listState.inited = true
    this.listState.loading = false
    this.listState.hasMore = hasMore
  },

  listIsLast(i) {
    return i + 1 === this.listState.list.length
  },

  listIsLastSkeleton(i) {
    return i + 1 === this.listState.skeleton.length
  },

  listLast() {
    return this.listState.list[this.listState.list.length - 1]
  },

  listTop() {
    return this.listState.list[0]
  },

  listEach(iterator) {
    const list = [...this.listState.list]

    list.forEach(iterator)

    this.listState.list = list
  },
}
