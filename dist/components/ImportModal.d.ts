import { TokenInfo as Token } from '../constants';
declare function ImportModal({ token, onImport }: {
    token: Token;
    onImport: () => void;
}): JSX.Element;
export default ImportModal;
