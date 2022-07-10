export const toLocaleDateJP= {
  transform(parameters) {
    const strDate = parameters[0];
    const arr = strDate.split("-");
    const date = new Date(arr[0], arr[1]-1, arr[2]);
    const option = { weekday: 'narrow', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('ja-JP', option);
  }
};

export const toLocaleDateUS= {
  transform(parameters) {
    const strDate = parameters[0];
    const arr = strDate.split("-");
    const date = new Date(arr[0], arr[1] - 1, arr[2]);
    const option = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', option);
  }
};