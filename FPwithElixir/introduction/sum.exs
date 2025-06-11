# Both solutions are valid, but the first one is more verbose and includes prompts for user input.
# This Elixir script reads two integers from the user and prints their sum.

# a = IO.gets("Enter first number: ") |> String.trim() |> String.to_integer()
# b = IO.gets("Enter second number: ") |> String.trim() |> String.to_integer()
# IO.puts("The sum is #{a + b}")

a = IO.gets("") |> String.trim() |> String.to_integer()
b = IO.gets("") |> String.trim() |> String.to_integer()
IO.puts("#{a + b}")
