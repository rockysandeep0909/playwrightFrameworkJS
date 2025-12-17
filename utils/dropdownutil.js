


class DropdownUtil {
    async selectDropdownOption(dropdownLocator, optionValue) {
        await dropdownLocator.selectOption(optionValue);
    }
}

module.exports = DropdownUtil;