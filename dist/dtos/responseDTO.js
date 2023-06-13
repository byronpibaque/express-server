"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class responseDTO {
    constructor(code, messaje, data) {
        this.code = code || 0;
        this.messaje = messaje || '';
        this.data = data || { null: null };
    }
}
exports.default = responseDTO;
