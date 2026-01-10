
/**
 * Utility class for handling dropdown interactions.
 * Methods:
 * - selectDropdownOption(dropdownLocator, optionValue): Selects an option from the dropdown based on the provided value.
 */

class DropdownUtil {
    async selectDropdownOption(dropdownLocator, optionValue) {
        await dropdownLocator.selectOption(optionValue);
    }


     async selectDropdownOptionBychoice(dropdownLocator, optionValue) {
        await dropdownLocator.selectOption(optionValue);
    }
}


   
 

module.exports = DropdownUtil;