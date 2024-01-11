export interface SearchParams {
  page_no: number
  page_size: number
  cert_key: string
  result_style: 'json' | 'xml'
  deposit_yn: 'N'
  publisher: string
  sort: string
  order_by: string
}
