@Service
public class CustomerService {
    @Autowired
    private CustomerRepository repository;

    public Customer saveCustomer(Customer customer) {
        return repository.save(customer);
    }

    public List<Customer> getAllCustomers(Pageable pageable) {
        return repository.findAll(pageable).getContent();
    }

    public Optional<Customer> getCustomerById(Long id) {
        return repository.findById(id);
    }

    public void deleteCustomer(Long id) {
        repository.deleteById(id);
    }
}
