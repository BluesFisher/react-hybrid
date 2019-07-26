export interface IMonitorInfo {
  time: string,
  level: string,
}

export interface ITableInfo {
  name: string,
  value: string | number,
}

export interface IProps {
  children?: any
  isSubPage?: boolean,
  title?: string,
  location?: string,
  monitorInfo?: IMonitorInfo,
  tableInfo?: ITableInfo[]
}
