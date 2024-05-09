# frozen_string_literal: true

Ransack.configure do |c|
  # Change default search parameter key name.
  # Default key name is :q
  c.search_key = :query
  c.hide_sort_order_indicators = false
  # c.search_key = :query
  # c.hide_sort_order_indicators = false
end
