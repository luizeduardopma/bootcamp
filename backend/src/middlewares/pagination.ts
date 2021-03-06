function paginate(items: any, currentLimit?: number, currentPage?: number) {
  const page = currentPage || 1;
  const limit = currentLimit || 10;
  const offset = (page - 1) * limit;

  const paginatedItems = items.slice(offset).slice(0, limit);

  const totalPages = Math.ceil(items.length / limit);

  return {
    page,
    limit,
    previousPage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: items.length,
    totalPages,
    data: paginatedItems,
  };
}

export { paginate };
