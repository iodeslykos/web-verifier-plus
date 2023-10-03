import { VerifyResponse } from "types/credential";

export type ResultLogProps = {
  verificationResult: VerifyResponse;
  issuerName: string | null
}