export default interface ApiResponseDto<T> {
    data: T;
    message?: string;
}