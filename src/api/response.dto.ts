export type ResponseData<TData> = { type: 'data'; data: TData }
export type ResponseError<TError> = { type: 'error'; error: TError }

export type ResponseDto<TData, TError> = ResponseData<TData> | ResponseError<TError>
