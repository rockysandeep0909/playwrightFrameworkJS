/**
 * Excel Utility for reading data from Excel sheets
 * This utility uses the xlsx library to parse Excel files
 */

const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

class ExcelUtil {
  /**
   * Read data from an Excel file
   * @param {string} filePath - Path to the Excel file
   * @param {string} sheetName - Name of the sheet to read (optional, defaults to first sheet)
   * @returns {Array} Array of objects with column headers as keys
   */
  static readExcelData(filePath, sheetName = null) {
    try {
      // Resolve the absolute path
      const absolutePath = path.resolve(filePath);

      // Check if file exists
      if (!fs.existsSync(absolutePath)) {
        throw new Error(`Excel file not found: ${absolutePath}`);
      }

      // Read the workbook
      const workbook = XLSX.readFile(absolutePath);

      // Get the sheet name (use provided name or first sheet)
      const sheet = sheetName || workbook.SheetNames[0];

      // Check if sheet exists
      if (!workbook.SheetNames.includes(sheet)) {
        throw new Error(
          `Sheet '${sheet}' not found. Available sheets: ${workbook.SheetNames.join(', ')}`
        );
      }

      // Convert sheet to JSON
      const worksheetData = workbook.Sheets[sheet];
      const data = XLSX.utils.sheet_to_json(worksheetData);

      return data;
    } catch (error) {
      console.error(`Error reading Excel file: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get all sheet names from an Excel file
   * @param {string} filePath - Path to the Excel file
   * @returns {Array} Array of sheet names
   */
  static getSheetNames(filePath) {
    try {
      const absolutePath = path.resolve(filePath);

      if (!fs.existsSync(absolutePath)) {
        throw new Error(`Excel file not found: ${absolutePath}`);
      }

      const workbook = XLSX.readFile(absolutePath);
      return workbook.SheetNames;
    } catch (error) {
      console.error(`Error reading sheet names: ${error.message}`);
      throw error;
    }
  }

  /**
   * Read data from a specific cell range
   * @param {string} filePath - Path to the Excel file
   * @param {string} sheetName - Name of the sheet
   * @param {string} range - Cell range (e.g., 'A1:B10')
   * @returns {Array} Array of values in the range
   */
  static readCellRange(filePath, sheetName, range) {
    try {
      const absolutePath = path.resolve(filePath);

      if (!fs.existsSync(absolutePath)) {
        throw new Error(`Excel file not found: ${absolutePath}`);
      }

      const workbook = XLSX.readFile(absolutePath);
      const worksheetData = workbook.Sheets[sheetName];

      if (!worksheetData) {
        throw new Error(`Sheet '${sheetName}' not found`);
      }

      const data = XLSX.utils.sheet_to_json(worksheetData, { range });
      return data;
    } catch (error) {
      console.error(`Error reading cell range: ${error.message}`);
      throw error;
    }
  }
}

module.exports = ExcelUtil;
