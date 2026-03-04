import { PostgrestError } from "@supabase/supabase-js";
/**
 *
 * This function is a higher-order function that takes a Supabase query function and its arguments, executes the query, and handles any errors that may occur.
 * It returns the data if the query is successful or throws an error if it fails.
 *
 * Parameters:
 * - fn: A function that performs a Supabase query and returns a promise that resolves to an object containing 'data' and 'error'.
 * - args: The arguments to be passed to the query function.
 *
 * Returns:
 * - A function that, when called, executes the query and returns the data or throws an error.
 *
 * @example
 * buildSupabaseQuery(getTestProfile, "uuid-uuid-000-1111-uuid", 1)
 **/
export const buildSupabaseQuery =
  <T, A extends any[]>(
    fn: (...args: A) => Promise<{ data: T | null; error: PostgrestError | null }>,
    ...args: A
  ) =>
  async () => {
    const { data, error } = await fn(...args);
    if (error) throw new Error(error.message);
    return data;
  };
