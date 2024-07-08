public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Page<Customer> findAll(Pageable pageable);
}
