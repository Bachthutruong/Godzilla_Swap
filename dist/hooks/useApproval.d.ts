export declare enum APPROVAL_STATE {
    UNKNOWN = "unknown",
    PENDING = "pending",
    APPROVED = "approved",
    NOT_APPROVED = "not_approved"
}
declare function useApproval(amountToApproveString: string, token: string, spender: string): {
    loading: boolean;
    approvalState: APPROVAL_STATE;
    approve: () => void;
};
export default useApproval;
